source("durationInput.R")

shinyUI(fluidPage(
  titlePanel("Custom input example"),

  fluidRow(
    column(4, wellPanel(
      durationInput("duration_test", "unused label", hvalue = 10, mvalue = 20, svalue = 30),
    )),
    column(8, wellPanel(
      verbatimTextOutput("durationText")
    ))
  )
))