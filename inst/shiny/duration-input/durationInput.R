durationInput = function(inputId, label, hvalue = 0, mvalue = 0, svalue = 0) {
  shiny::tagList(
    shiny::singleton(
      shiny::tags$head(
        shiny::tags$script(src = "duration-input-bindings.js")
      )
    ),

    shiny::div(
      id = inputId, class = "durationInput",
      tags$input(class="hour", value=hvalue),
      tags$input(class="minute", value=mvalue),
      tags$input(class="second", value=svalue)
    )
  )
}