const express = require('express') //or import express from "express"(depends on whether using common or modulejs)
require('dotenv').config()

const app = express()
const port = 3000
const gitdata={
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 86,
  "public_gists": 4,
  "followers": 21929,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2024-04-10T13:18:57Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/adamya",(req,res)=>{
res.send("<h1>I am adamya</h1>")
})
app.get("/arnav",(req,res)=>{
    res.send("<h2>I am Arnav</h2>")
    })

    app.get("/check",(req,res)=>{
      res.send(`The old port is ${port}  and new env port is ${process.env.PORT}`)
    })

  app.get("/git",(req,res)=>{
  res.send(gitdata)
  })
  app.get("/git1",(req,res)=>{
    res.json(gitdata)
  })