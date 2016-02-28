source("durationInput.R")
shinyUI(fluidPage(
  fluidRow(
    durationInput(inputId = "durationtest", label = "unused label"),
    verbatimTextOutput("durationtxt")
  )
))