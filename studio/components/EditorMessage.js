import React from "react"
import { FormField } from "@sanity/base/components"
import { TextInput, Stack, Text, Heading } from "@sanity/ui"
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent"
import { useId } from "@reach/auto-id" // hook to generate unique IDs

const EditorMessage = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    placeholder, // Placeholder text from the schema
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange, // Method to handle patch events
  } = props

  // Creates a unique ID for our input
  // const inputId = useId()

  // const handleChange = React.useCallback(
  //   (event) => {
  //     const inputValue = event.currentTarget.value
  //     onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
  //   },
  //   [onChange]
  // )
  return (
    <Stack space={2}>
      <Heading>{type?.options?.heading || "Editor Message"}</Heading>
      <div style={{ padding: 6 }} />
      <Text muted size={2}>
        {type?.options?.text || "Please fill the following seections"}
      </Text>
    </Stack>
  )
})

export default EditorMessage
