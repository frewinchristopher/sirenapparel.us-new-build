import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

class Story extends React.Component {
  render () {
    return (
      <div>
        {/*story start*/}
        <section id="story" className="contact">
          <div className="container">
            <div className="contact-details">
              <div className="section-header contact-head  text-center">
                <h2><FormattedMessage id="Story.title"/></h2>
                <p>
                  <FormattedMessage id="Story.description"/> 
                </p>
                <p>
                  <FormattedHTMLMessage id="Story.note"/> 
                </p>
              </div>{/*/.section-header*/}
            </div>{/*/.contact-details*/}
          </div>{/*/.container*/}
        </section>{/*/.story*/}
      </div>
    );
  }
}

export default Story;