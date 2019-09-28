import React, { useState, useEffect } from "react";
import { SafeAreaBlock, Block, T } from "components/Block";
import Button from "components/Button";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";
import { func } from "prop-types";
import { NavigationSwitchScreenComponent } from "react-navigation";

type ScreenProps = {};

type LocationPermissionType =
  | "always"
  | "whenInUse"
  | "undetermined"
  | "denied";

function getLocationPermissionsStatus(
  status: Permissions.PermissionStatus,
  permissions: Permissions.PermissionMap
): LocationPermissionType {
  if (
    status === "granted" &&
    (Platform.OS !== "ios" || permissions.location.ios.scope === "always")
  ) {
    return "always";
  }
  if (
    status === "granted" &&
    (Platform.OS !== "ios" || permissions.location.ios.scope === "whenInUse")
  ) {
    return "always"; // TODO: change to "whenInUse"
  } else if (status === "undetermined") {
    return "undetermined";
  } else {
    return "denied";
  }
}

async function checkLocationPermissions() {
  const { status, permissions } = await Permissions.getAsync(
    Permissions.LOCATION
  );
  return getLocationPermissionsStatus(status, permissions);
}

async function requestLocationPermissions(): Promise<LocationPermissionType> {
  const { status, permissions } = await Permissions.askAsync(
    Permissions.LOCATION
  );
  return getLocationPermissionsStatus(status, permissions);
}

async function checkNotificationPermissions(): Promise<
  Permissions.PermissionStatus
> {
  const { status, permissions } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS,
    Permissions.USER_FACING_NOTIFICATIONS
  );
  return status;
}

async function requestNotificationPermissions(): Promise<
  Permissions.PermissionStatus
> {
  const { status } = await Permissions.askAsync(
    Permissions.NOTIFICATIONS,
    Permissions.USER_FACING_NOTIFICATIONS
  );
  return status;
}

const GetPermissions: NavigationSwitchScreenComponent<null, ScreenProps> = ({
  navigation
}) => {
  const [locationPermissionsStatus, setLocationPermissionsStatus] = useState<
    LocationPermissionType
  >(null);
  const [
    notificationPermissionsStatus,
    setNotificationPermissionsStatus
  ] = useState<Permissions.PermissionStatus>(null);

  function tryToRedirect(
    instant: boolean,
    location: LocationPermissionType,
    notifications: Permissions.PermissionStatus
  ) {
    if (location === "always" && notifications === "granted") {
      if (instant) {
        navigation.navigate("Home");
      } else {
        setTimeout(() => navigation.navigate("Home"), 500);
      }
    }
  }

  async function checkPermissions() {
    const location = await checkLocationPermissions();
    const notifications = await checkNotificationPermissions();

    setLocationPermissionsStatus(location);
    setNotificationPermissionsStatus(notifications);

    tryToRedirect(true, location, notifications);
  }

  function updateLocationPermissionsStatus(status: LocationPermissionType) {
    setLocationPermissionsStatus(status);
    tryToRedirect(false, status, notificationPermissionsStatus);
  }

  function updateNotificationsPermissionsStatus(
    status: Permissions.PermissionStatus
  ) {
    setNotificationPermissionsStatus(status);
    tryToRedirect(false, locationPermissionsStatus, status);
  }

  useEffect(() => {
    checkPermissions();
  }, []);

  if (!locationPermissionsStatus || !notificationPermissionsStatus) {
    return <Block backgroundColor="midnight" flex></Block>;
  }

  return (
    <Block backgroundColor="midnight" flex>
      <SafeAreaBlock dFlex flex>
        <Block flex dFlex fd="column" jc="center" ph={2} mb={8}>
          <Block mb={8}>
            <T type="h6" color="white">
              Welcome to Fugitive. We need some permissions to make sure the
              game will work properly.
            </T>
          </Block>
          <Block mb={6}>
            {!locationPermissionsStatus && (
              <Button mb={2} disabled o={0.5}>
                Loading...
              </Button>
            )}
            {locationPermissionsStatus === "always" && (
              <Button mb={2} backgroundColor="secondary" disabled o={0.5}>
                We've got your location 👍
              </Button>
            )}
            {(locationPermissionsStatus === "whenInUse" ||
              locationPermissionsStatus === "denied") && (
              <Block mb={1}>
                <Button
                  mb={2}
                  o={0.5}
                  onPress={() =>
                    requestLocationPermissions().then(
                      updateLocationPermissionsStatus
                    )
                  }
                >
                  Location Access Denied
                </Button>
                <T type="subtitle2" color="white">
                  Go to Settings > Privacy > Location > Map Game > Select
                  "Always"
                </T>
              </Block>
            )}
            {locationPermissionsStatus === "undetermined" && (
              <Button
                mb={2}
                onPress={() =>
                  requestLocationPermissions().then(
                    updateLocationPermissionsStatus
                  )
                }
              >
                Allow Location Access...
              </Button>
            )}
            <T type="caption" color="white">
              We need to use your location in the background in order to know
              your current location throught the game. This is never used
              outside of game mode. Game mode is never activated without your
              consent.
            </T>
          </Block>
          <Block mb={6}>
            {!locationPermissionsStatus && (
              <Button mb={2} disabled o={0.5}>
                Loading...
              </Button>
            )}
            {notificationPermissionsStatus === "granted" && (
              <Button mb={2} backgroundColor="secondary" disabled o={0.75}>
                We've can send you notifications! 👍
              </Button>
            )}
            {notificationPermissionsStatus === "denied" && (
              <Block mb={1}>
                <Button
                  mb={2}
                  o={0.5}
                  onPress={() =>
                    requestNotificationPermissions().then(
                      updateNotificationsPermissionsStatus
                    )
                  }
                >
                  Notification Permissions Denied
                </Button>
                <T type="subtitle2" color="white">
                  Go to Settings > Notifications > Map Game > Enable "Allow
                  Notifications"
                </T>
              </Block>
            )}
            {notificationPermissionsStatus === "undetermined" && (
              <Button
                mb={2}
                onPress={() =>
                  requestNotificationPermissions().then(
                    updateNotificationsPermissionsStatus
                  )
                }
              >
                Allow Notifications...
              </Button>
            )}
            <T type="caption" color="white">
              When key events happen in game (like if you get caught, or you
              have new information), it is essential for us to tell you about
              these things as soon as possible. This is never used outside of
              games unless you opt in for other notification types.
            </T>
          </Block>
        </Block>
      </SafeAreaBlock>
    </Block>
  );
};

export default GetPermissions;
