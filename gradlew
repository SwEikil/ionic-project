#!/bin/sh
# Delegate gradle wrapper calls to the Android project wrapper.
cd "$(dirname "$0")/android"
exec ./gradlew "$@"
