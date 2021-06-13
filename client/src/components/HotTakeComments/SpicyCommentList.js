import React from 'react';
import moment from "moment";

function SpicyCommentList(props) {
  return (
      <>
      {
        props.hotTake.Comments.map((comment, i) => (
          <div className="main-view" key={i}>
            <div className="w-full max-w-screen border border-gray-600 rounded-2xl py-3 px-5 mb-5 shadow-lg">
              <div className="py-3">
                <p className="text-lg">{comment.body}</p>
                <div className="flex justify-between">
                  <p className="text-gray-500 pt-1">{moment(comment.createdAt).fromNow()}</p>
                  <p className="text-gray-500 pt-1">{comment.author}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      </>
  );
}

export default SpicyCommentList;
