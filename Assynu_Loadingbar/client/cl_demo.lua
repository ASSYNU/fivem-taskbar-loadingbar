RegisterCommand('loadingbar_test_lua', function(source, args, rawCommand)
  exports["Assynu_Loadingbar"]:StartLoadingbar(5000, "Loading")
end)