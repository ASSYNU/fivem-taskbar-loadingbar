fx_version 'cerulean'
games { 'gta5' }

author 'Assynu'
description 'NP Style Loading Bar'
version '1.0.0'

ui_page 'html/index.html'

files {
  "html/index.html",
  "html/index.js",
  "html/index.css"
}
client_script {
  "client/cl_main.js",
  -- Showcase
  "client/cl_demo.js",
  "client/cl_demo.lua",
}

export "StartLoadingbar"
export "closeGuiFail"