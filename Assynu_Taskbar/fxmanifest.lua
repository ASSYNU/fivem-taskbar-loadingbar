fx_version 'cerulean'
games { 'gta5' }

author 'Assynu'
description 'NP Style Task Bar'
version '1.0.0'

ui_page 'html/index.html'

files {
  "html/index.html",
  "html/index.js",
  "html/index.css"
}
client_script {
  "client/cl_main.lua",
  -- Showcase
  "client/cl_demo.lua",
}

export "taskBar"
export "closeGuiFail"