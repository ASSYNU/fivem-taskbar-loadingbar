/////////////////////////////////
////////////VARIABLES////////////
/////////////////////////////////

var ActiveLoadingbars = {};
var taskInProcess = false;

/////////////////////////////////
////////////FUNCTIONS////////////
/////////////////////////////////

// async func

Wait = function (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// GUI

openGui = function (sentLength, namesent) {
  guiEnabled = true;
  SendNUIMessage({
    runProgress: true,
    Length: sentLength,
    name: namesent,
  });
};

updateGui = function (sentLength, namesent) {
  SendNUIMessage({
    runUpdate: true,
    Length: sentLength,
    name: namesent,
  });
};

closeGui = function () {
  guiEnabled = false;
  SendNUIMessage({ LoadingClose: true });
};

closeNormalGui = function () {
  guiEnabled = false;
};

// Loading bar

StartLoadingbar = function (length, name) {
  Loadingbar(length, name);
};

Loadingbar = async function (length, name) {
  if (taskInProcess) {
    return;
  }
  taskInProcess = true;
  openGui(length, name);

  var maxcount = GetGameTimer() + length;
  var currentTime = GetGameTimer();
  while (currentTime < maxcount && guiEnabled) {
    await Wait(1);
    currentTime = GetGameTimer();
    var current = 100 - ((maxcount - currentTime) / length) * 100;
    current = Math.min(100, current);
    updateGui(current, name);
  }

  closeGui();
  taskInProcess = false;
  return;
};

/////////////////////////////////
//////////NUI CALLBACKS//////////
/////////////////////////////////

RegisterNuiCallbackType('CancelLoadingbar');
on('__cfx_nui:CancelLoadingbar', (data, cb) => {
  closeGui();
  var LoadingbarId = data.TaskNumber;
  ActiveLoadingbars[LoadingbarId] = 2;
});

RegisterNuiCallbackType('LoadingEnd');
on('__cfx_nui:LoadingEnd', (data, cb) => {
  closeNormalGui();

  var LoadingbarId = data.TaskNumber;
  ActiveLoadingbars[LoadingbarId] = 3;
});

/////////////////////////////////
///////////////END///////////////
/////////////////////////////////
