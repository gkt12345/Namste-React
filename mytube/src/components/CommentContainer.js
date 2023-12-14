import React from "react";
import CommentList from "./CommentList";

const CommentContainer = () => {
  const commentDummyData = [
    {
      name: "Gaurav Trivedi 1",
      text: "lorem pixel dummy text sown in the",
      reply: [
        {
          name: "Gaurav Trivedi 1.1",
          text: "lorem pixel dummy text sown in the",
          reply: [
            {
              name: "Gaurav Trivedi 1.1.1",
              text: "lorem pixel dummy text sown in the",
              reply: [
                {
                  name: "Gaurav Trivedi 1.1.1.1",
                  text: "lorem pixel dummy text sown in the",
                  reply: [
                    {
                      name: "Gaurav Trivedi 1.1.1.1.1",
                      text: "lorem pixel dummy text sown in the",
                      reply: [
                        {
                          name: "Gaurav Trivedi 1.1.1.1.1.1",
                          text: "lorem pixel dummy text sown in the",
                          reply: [],
                        },
                        {
                          name: "Gaurav Trivedi 1.1.1.1.1.2",
                          text: "lorem pixel dummy text sown in the",
                          reply: [],
                        },
                      ],
                    },
                    {
                      name: "Gaurav Trivedi 1.1.1.1.2",
                      text: "lorem pixel dummy text sown in the",
                      reply: [],
                    },
                  ],
                },
                {
                  name: "Gaurav Trivedi 1.1.2.2",
                  text: "lorem pixel dummy text sown in the",
                  reply: [],
                },
              ],
            },
            {
              name: "Gaurav Trivedi 1.1.2",
              text: "lorem pixel dummy text sown in the",
              reply: [
                {
                  name: "Gaurav Trivedi 1.1.2.1",
                  text: "lorem pixel dummy text sown in the",
                  reply: [],
                },
                {
                  name: "Gaurav Trivedi 1.1.2.2",
                  text: "lorem pixel dummy text sown in the",
                  reply: [],
                },
              ],
            },
          ],
        },
        {
          name: "Gaurav Trivedi 1.2",
          text: "lorem pixel dummy text sown in the",
          reply: [],
        },
      ],
    },
    {
      name: "Gaurav Trivedi 2",
      text: "lorem pixel dummy text sown in the",
      reply: [
        {
          name: "Gaurav Trivedi 2.1",
          text: "lorem pixel dummy text sown in the",
          reply: [],
        },
        {
          name: "Gaurav Trivedi 2.2",
          text: "lorem pixel dummy text sown in the",
          reply: [],
        },
      ],
    },
    {
      name: "Gaurav Trivedi 3",
      text: "lorem pixel dummy text sown in the",
      reply: [],
    },
  ];

  return (
    <div>
      <h1 className="mt-5 font-bold text-lg ">Comments:</h1>
      <CommentList comments={commentDummyData} />
    </div>
  );
};

export default CommentContainer;
