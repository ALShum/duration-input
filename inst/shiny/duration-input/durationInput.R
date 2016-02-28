durationInput <- function(inputId, label, value = list(hour = 0, min = 0, sec = 0), width="50px") {
  style = ifelse(!is.null(width), paste0("width: ", shiny::validateCssUnit(width), ";") ,NULL)

  shiny::tagList(
    shiny::singleton(
      shiny::tags$head(
        shiny::tags$script(src = "duration-input-bindings.js")
      )
    ),


    shiny::tags$div(id = inputId, class = "duration",
      shiny::tags$input(class = "hour", type = "number", value = value$hour, style = style),
      shiny::tags$input(class = "minute", type = "number", value = value$min, style = style),
      shiny::tags$input(class = "second", type = "number", value = value$sec, style = style)
    )
  )
}