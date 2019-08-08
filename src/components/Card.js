import React from 'react';

export default function Card(props)
{
    return (
        <div className="wrapper">
    <div className="social-card user">
      <div className="social-card__image social-card__image--user">
        <img src={props.img_src} alt="user" />
      </div>
      <div className="social-card__level social-card__level--user"><i>@{props.loginName}</i></div>
      <div className="social-card__unit-name">{props.fullName}</div>
      <div className="social-card__unit-description">
        {props.bio}
      </div>

      <div className="social-card__unit-stats social-card__unit-stats--user clearfix">
        <div className="one-third">
          <div className="stat">{props.repos}</div>
          <div className="stat-value">Repos</div>
        </div>

        <div className="one-third">
          <div className="stat">{props.followers}</div>
          <div className="stat-value">Followers</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">{props.following}</div>
          <div className="stat-value">Following</div>
        </div>

      </div>

    </div> 
  </div> 
    );
}