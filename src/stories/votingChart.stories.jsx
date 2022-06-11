import React from "react";
import { storiesOf } from "@storybook/react";
import VotingChart from "../components/VotingChart/votingChart";

const stories = storiesOf("Voting Chart", module);
stories.add("Voting Chart", () => {
    // Can import and render Voting Chart component here after adding the story
    return <VotingChart />;
});
