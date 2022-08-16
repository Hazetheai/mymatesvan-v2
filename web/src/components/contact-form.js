import React from "react"
import * as styles from "./form.css"
import { useForm, ValidationError } from "@formspree/react"
import { Box, Button, Container, Flex, Text } from "./ui"

function ContactForm({ submitHandler }) {
  const [state, handleSubmit] = useForm("mzbowrob")
  if (state.succeeded) {
    !!submitHandler && submitHandler(state)
    return (
      <Container>
        <Box center>
          <Text>
            Thanks for contacting us! We will get back to you as soon as
            possible
          </Text>
        </Box>
      </Container>
    )
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Flex marginY={3} gap={3}>
        <Box>
          <input
            className={styles.inputText}
            aria-label="Name"
            type="text"
            placeholder="Name"
            name="name"
          />
          <span className={styles.contactSpanErr}>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </span>
        </Box>
        <Box>
          <input
            className={styles.inputText}
            aria-label="Mobile No"
            type="tel"
            placeholder="Mob No."
            name="phone"
          />
          <span className={styles.contactSpanErr}>
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </span>
        </Box>
      </Flex>
      <Flex marginY={3}>
        <Box>
          <input
            className={styles.inputText}
            aria-label="Email"
            placeholder="Email"
            id="email"
            type="email"
            name="email"
          />
          <span className={styles.contactSpanErr}>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </span>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <div>
            <textarea
              className={styles.textAreaMessage}
              aria-label="Message"
              type="text"
              placeholder="Message"
              id="message"
              name="message"
            ></textarea>
            <span className={styles.contactSpanErr}>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </span>
          </div>
        </Box>
      </Flex>
      <Flex>
        <Box center>
          <Button as="button" type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Box>
      </Flex>
    </form>
  )
}

export default ContactForm
