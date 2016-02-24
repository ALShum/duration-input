shinyServer(function(input, output, session) {

  output$btnText <- renderText({
    as.character(input$testBtn)
  })

})