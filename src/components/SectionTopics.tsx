import { topics } from "@/libs/topics";
import { CardTopic } from "./CardTopic";
import { useState } from "react";
import iconArrowTop from "@/assets/icon-arrow-top.svg";
import iconArrowBottom from "@/assets/icon-arrow-bottom.svg";
import "@/styles/section-topics.css";

export const SectionTopics = ({
  currentTopic,
  changeTopic,
}: {
  currentTopic: string;
  changeTopic: (topic: string) => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="section-topics-note">
      <div className="container-topics-note">
        
          <strong className="title-container-note">
            {currentTopic ? currentTopic : "Temas"}
          </strong>
        
        {open ? (
          <img
            src={iconArrowTop.src}
            alt="icon arrow bottom"
            width="26"
            height="26"
            className="icon-arrow-topics"
            onClick={() => setOpen(false)}
          />
        ) : (
          <img
            src={iconArrowBottom.src}
            alt="icon arrow top"
            width="26"
            height="26"
            className="icon-arrow-topics"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      <div className={`list-topics-note ${open ? "open-list-topics" : ""}`}>
        {topics.map((topic) => (
          <CardTopic key={topic.id} topic={topic} changeTopic={changeTopic} currentTopic={currentTopic} />
        ))}
      </div>
    </section>
  );
};
