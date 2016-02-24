source("incrementInput.R")

shinyUI(fluidPage(
  titlePanel("Custom input example"),

  fluidRow(
    column(4, wellPanel(
      incrementButton("testBtn", 5)
    )),
    column(8, wellPanel(
      verbatimTextOutput("btnText")
    ))
  )
))