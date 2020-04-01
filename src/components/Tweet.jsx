import React from "react";
import Moment from "react-moment";

function Tweet(props) {
  let tweet = props.tweet;
  return (
    <div className='bg-gray-200 my-3 hover:bg-indigo-100 rounded-md pd-4'>
      <div className='flex h-auto'>
        <div className='object-contain mt-1'>
          <img
            src={tweet.user.profile_image_url_https}
            alt='Profile'
            className='rounded-full mr-6'
          />
        </div>

        <div className='flex flex-col ml-1'>
          <div className='flex justify-between'>
            <div className='flex'>
              <p className='mr-2'>{tweet.user.name}</p>
              <div className='text-gray-700'>
                <a href={`https://twitter.com/${tweet.user.screen_name}`}>
                  @{tweet.user.screen_name}
                </a>
                <span className='mx-1'>.</span>
                <Moment fromNow>{tweet.created_at}</Moment>
              </div>
            </div>
            <a
              className='text-blue-600 mr-2'
              href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`}>
              link
            </a>
          </div>
          <div className="mt-3">{tweet.text}</div>
        </div>
      </div>
    </div>
  );
}

export { Tweet };
