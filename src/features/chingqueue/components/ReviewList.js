import React from 'react'
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';

function ReviewList(props) {
    const data = [
        {
          actions: [<span>User rating: {5}/5</span>],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          datetime: (
            <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().subtract(1, 'days').format('MMM DD, YYYY')}</span>
            </Tooltip>
          ),
        },
        {
          actions: [<span>User rating: {5}/5</span>],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          datetime: (
            <Tooltip title={moment().subtract(5, 'days').format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().subtract(5, 'days').format('MMM DD, YYYY')}</span>
          </Tooltip>
          ),
        },
      ];
    return (
        <div style={{marginLeft: 500, marginRight: 500}}>
            <List
                className="comment-list"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <li>
                    <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                    />
                </li>
                )}
            />
        </div>
    )
}

export default ReviewList
