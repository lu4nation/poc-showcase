#!/bin/sh

homedir=$(pwd)/mobile
myapp=${2:-myapp}

if [ -d $homedir ]
then
  echo "Diretório $homedir já existe"
else
  mkdir $homedir
fi

cd $homedir

node_mod_dir=$(pwd)/node_modules
android_home=$(pwd)/android-sdk-linux

if [ ! -x $node_mod_dir/ionic/bin/ionic ]
then
  npm install ionic
fi
if [ ! -x $node_mod_dir/cordova/bin/cordova ]
then
  npm install cordova
fi

if [ "$1" = "emulate" ]
then
  if [ ! -x $android_home/tools/android ]
  then
    if [ ! -e android-sdk_r24.1.2-linux.tgz ]
    then
      wget http://dl.google.com/android/android-sdk_r24.1.2-linux.tgz
    fi
    tar xvfz android-sdk_r24.1.2-linux.tgz
  fi
  if [ ! -d $android_home/platform-tools ]
  then
    echo "Selecione:"
    echo "  - Android SDK Platform-tools"
    echo "  - Android SDK Build-tools"
    echo "  - Android 5.0.1 (API 21)"
    $android_home/tools/android
    $android_home/tools/android avd
  fi
fi

# ubuntu 14.04.02
# sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 lib32stdc++6
# sudo apt-get install ant

export PATH=$PATH:$node_mod_dir/ionic/bin:$node_mod_dir/cordova/bin:$android_home/platform-tools:$android_home/tools 
ionic start $myapp sidemenu
cd $myapp
if [ "$1" = "emulate" ]
then
  ionic platform add android
  ionic emulate android
else
  ionic serve
fi
