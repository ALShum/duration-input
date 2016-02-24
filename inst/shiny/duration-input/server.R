shinyServer(function(input, output, session) {

  output$durationText <- renderText({
    as.character(input$duration_test)
  })
})