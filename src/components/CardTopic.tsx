import "@/styles/card-topic.css";
import { TopicsTypes } from "@/types/types";

export const CardTopic = ({
  topic,
  changeTopic,
  currentTopic
}: {
  topic: TopicsTypes;
  changeTopic: (topic: string) => void | null;
  currentTopic: string
}) => {
  return (
    <div className={`card-topic-note ${topic.name === currentTopic ? "current-topic" : ""}`} onClick={() => changeTopic(topic.name)}>
      <p className="name-box-topic">{topic.name}</p>
      <img
        src={topic.icon.src}
        alt={`icon topic ${topic.name}`}
        width={26}
        height={26}
        className="icon-box-note"
      />
    </div>
  );
};
