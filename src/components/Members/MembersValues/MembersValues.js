// @flow
import React, { useState, useEffect } from 'react'
import { SMALL_WIDTH } from '../../../constants'
import './MembersValues.css'

function MembersValues() {
  const [isViewSmall, setIsViewSmall] = useState(window.innerWidth <= SMALL_WIDTH)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsViewSmall(window.innerWidth <= SMALL_WIDTH)
    })
  }, [])

  return (
    <div className="members-values">
      <div className="members-values-container">
        <div className="members-values-card">
          <div className="members-values-card-overlay" />
          <h1 className="members-values-card-title">
            It&apos;s all about people
          </h1>
          {
            isViewSmall
              ? (
                <p className="members-values-card-text">
                  It is important to trust and respect the people in the team for us to reach our
                  goals.
                </p>
              )
              : (
                <p className="members-values-card-text">
                  Everything we accomplish is thanks to the trust we put in each other and the
                  passion we share for robotics and technology; we feel proud to have valuable
                  members with different talents and perspectives that contribute to reaching
                  our goals.
                </p>
              )
          }
        </div>
        <div className="members-values-card">
          <div className="members-values-card-overlay" />
          <h1 className="members-values-card-title">
            Open Source
          </h1>
          {
          isViewSmall
            ? (
              <p className="members-values-card-text">
                Sharing knowledge and making it accessible is how we grow and transcend.
              </p>
            )
            : (
              <p className="members-values-card-text">
                Sharing knowledge and making it accessible is how we make our members and community
                grow and tech development transcend.
              </p>
            )
          }
        </div>
        <div className="members-values-card">
          <div className="members-values-card-overlay" />
          <h1 className="members-values-card-title">
            Curiosity to innovate
          </h1>
          {
            isViewSmall
              ? (
                <p className="members-values-card-text">
                  There is always space to improve, grow, learn and create.
                </p>
              )
              : (
                <p className="members-values-card-text">
                  With technology, there are always new ways in which solutions can be developed to
                  be better, and we are hungry to discover them. There is always space to improve,
                  grow, learn and create, and we always look for new challenges.
                </p>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default MembersValues
