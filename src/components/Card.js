import React from 'react';

export default function Card(props)
{
    return (
        <div className="wrapper">
    <div className="clash-card barbarian">
      <div className="clash-card__image clash-card__image--barbarian">
        <img src={props.img_src} alt="barbarian" />
      </div>
      <div className="clash-card__level clash-card__level--barbarian"><i>@{props.loginName}</i></div>
      <div className="clash-card__unit-name">{props.fullName}</div>
      <div className="clash-card__unit-description">
        {props.bio}
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
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