import React from "react";
import { Button, Image, Modal, Dimmer } from "semantic-ui-react";
import PreLoader from "../../components/loader";

const JokesModal = ({
  open,
  nextJokeStatus,
  joke,
  loading,
  loadNextJoke,
  handleCloseModal,
  getCategory
}) =>
  loading && !nextJokeStatus ? (
    <PreLoader />
  ) : (
    <Modal size="tiny" open={open} onClose={handleCloseModal}>
      <Modal.Header>Chuck Norris {getCategory(joke)} Jokes</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="tiny" src={joke.icon_url} />
        <Modal.Description>
          {loading && nextJokeStatus ? (
            <Dimmer active>
              <PreLoader />
            </Dimmer>
          ) : (
            <p>{joke.value}</p>
          )}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={handleCloseModal}>
          Close
        </Button>
        <Button
          primary
          icon="checkmark"
          labelPosition="right"
          content="Another one?"
          onClick={loadNextJoke(getCategory(joke))}
        />
      </Modal.Actions>
    </Modal>
  );

export default JokesModal;
