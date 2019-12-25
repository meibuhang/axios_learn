import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import request from './api/request';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Header from "./component/Header";
import CardContent from "@material-ui/core/CardContent";

const networkAvatar = makeStyles(theme => ({
  root: {
    display: "flex",

    "& > *": {
      margin: theme.spacing(1)
    }
  },
  bigAvatar: {
    width: 100,
    height: 100
  },
  smallAvatar: {
    width: 70,
    height: 70
  }
}));
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flex: "1 1 0%",
    flexDirection: "row",
    width: "100%",
    marginRight: "150px",
    backgroundColor: theme.palette.background.paper
  },

  card: {
    maxWidth: "345%"
  },
  media: {
    height: 140
  },
  section2: {
    margin: theme.spacing(2)
  },
  section1: {
    margin: theme.spacing(1)
  }
}));
const seeAllFeatured = {
  fontStyle: "normal",
  fontDisplay: "swap",
  color: "#009688"
};

const LatestUpdateArticleList = [
  {
    title: "How to Remove Array Duplicates in ES6",
    data: {
      author: "Arfat Salman",
      category: "Engineering",
      postDate: "34 March, 2019",
      totalMinRead: 7,
      articleImage: "https://unsplash.it/800/600?image=87"
    }
  },
  {
    title: "How to Remove Array Duplicates in ES6 111",
    data: {
      author: "Arfat Salman",
      category: "Engineering",
      postDate: "34 March, 2019",
      totalMinRead: 7,
      articleImage: "https://unsplash.it/800/600?image=75"
    }
  }
];

// function ArticleList ({ articles }) {
//   return (
//     <div>
//       {articles.map(article => (
//         <div key={article.id}>
//           {article.title}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Home() {
  // const { data, error } = useSWR('articleApi.getUserArticles', articleApi.getLastestArticles)

  // const article = data === undefined
  //   ? []
  //   : data.articles

  
  const [data, setData] = useState({articles:[]});
  const API = 'http://localhost:8080/api/article/allarticles'
  useEffect(() => {
   const fetchData = async () => {
  const result = await axios.get (API);
  console.log(result);
  setData({articles:result.data.articles}); 
  };
  fetchData();
},[]);
  const classes = useStyles();
  const picNetWork = networkAvatar();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.section1}>
        <Grid container spacing={2} id="grids">
          <Grid item xs={4}>
            <Paper>
               
              <div className="firstCard">
                <img
                  src="https://unsplash.it/800/600?image=87"
                  className="mediaTop"
                />
              </div>
              <CardContent>
                <div className="titleArticle">
                  <Typography variant="h6" component="h6" align="left">
                    How to Remove Array Duplicates in ES6
                  </Typography>
                  <p>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </p>

                  <div className="author">
                    <span>Arfat Salman in codeburst</span>
                  </div>
                  <div className="dateTime">
                    Mar 24, 2018 <span>7 Min Read</span>
                  </div>
                </div>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            {LatestUpdateArticleList.map(LatestUpdateArticleData => (
              <Paper>
                <div className="midle">
                  <img
                    src={LatestUpdateArticleData.data.articleImage}
                    className="mediaMidleTop"
                  />
                  <Grid className="gridArticle">
                    <Typography variant="subtitle2" component="h6">
                      {LatestUpdateArticleData.title}
                    </Typography>
                    <div className="author">
                      <span>
                        {LatestUpdateArticleData.data.author} in{" "}
                        {LatestUpdateArticleData.data.category}
                      </span>
                    </div>
                    <div className="dateTime">
                      {LatestUpdateArticleData.data.dateTime}{" "}
                      <span>
                        {LatestUpdateArticleData.data.totalMinRead} Min Read
                      </span>
                    </div>
                  </Grid>
                </div>
              </Paper>
            ))}
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <div className="firstCardRight">
                <img
                  src="https://unsplash.it/800/600?image=75"
                  className="mediaTop"
                />
              </div>
              <CardContent>
                <div className="titleArticleRight">
                  <Typography variant="h6" component="h6" align="left">
                    How to Remove Array Duplicates in ES6
                  </Typography>
                  <p>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica.
                  </p>
                  <div className="author">
                    <span>Arfat Salman in codeburst</span>
                  </div>
                  <div className="dateTime">
                    Mar 24, 2018 <span>7 Min Read</span>
                  </div>
                </div>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* container bawah */}
      <div className={classes.section2}>
        <div className="divider">
          <Link
            component="button"
            onClick={() => {
              console.info("I'm a button.");
            }}
            style={seeAllFeatured}
          >
            SEE ALL FEATURED >>
          </Link>{" "}
        </div>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Grid>
            

              {data && data.articles.map(item =>(
             <Paper>
             <div className="midle">
               <Grid>
                 <div className="titleArticle">
                   <Typography variant="h6" component="h6" align="left">
                   {item.title}
                   </Typography>
                   <p>
                   {item.content.substring(0,200)}
                   </p>
      
                   <div className="author">
                     <span> {item.users.fullname}</span>
                   </div>
                   <div className="dateTime">
                   { item.createdAt.substring(0,10)} <span> *7 Min Read*</span>
                   </div>
                 </div>
               </Grid>
               <img
                 src={item.image}
                 className="mediaSection"
               />
             </div>
           </Paper>
              ))}
          
           
           
             
            </Grid>
          </Grid>

          {/* GRID X5 kanan bawah */}
          <Grid item xs={5}>
            {/* bagan atas */}
            <Grid>
              <Paper>
                <Grid>
                  <div className="midle topside">
                    <Typography variant="h5" className="newfromnetwork">
                      New From Your Network
                    </Typography>
                    <div
                      className={picNetWork.root}
                      style={{ marginTop: "10px", marginLeft: "30px" }}
                    >
                      <Avatar
                        alt="picture Network"
                        src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
                        className={picNetWork.bigAvatar}
                      />
                    </div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
            {/* akhir bagian atas */}

            <Grid>
              <Paper>
                <Grid>
                  <div className="midle bottomSide">
                    <div
                      className={picNetWork.root}
                      style={{ marginTop: "10px", marginLeft: "40px" }}
                    >
                      <Avatar
                        alt="picture Network"
                        src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
                        className={picNetWork.smallAvatar}
                      />
                    </div>
                    <div style={{ marginTop: "10px", marginLeft: "30px" }}>
                      <Typography variant="h6" align="left">
                        How to Remove Array Duplicates in ES6
                      </Typography>
                      <Typography
                        variant="subtitle"
                        color="textSecondary"
                        align="left"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
            <Grid>
              <Paper>
                <Grid>
                  <div className="midle">
                    <div
                      className={picNetWork.root}
                      style={{ marginTop: "10px", marginLeft: "40px" }}
                    >
                      <Avatar
                        alt="picture Network"
                        src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
                        className={picNetWork.smallAvatar}
                      />
                    </div>
                    <div style={{ marginTop: "10px", marginLeft: "30px" }}>
                      <Typography variant="h6" component="h6" align="left">
                        How to Remove Array Duplicates in ES6
                      </Typography>
                      <Typography
                        variant="subtitle"
                        color="textSecondary"
                        align="left"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
            <Grid>
              <Paper>
                <Grid>
                  <div className="midle">
                    <div
                      className={picNetWork.root}
                      style={{ marginTop: "10px", marginLeft: "40px" }}
                    >
                      <Avatar
                        alt="picture Network"
                        src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
                        className={picNetWork.smallAvatar}
                      />
                    </div>
                    <div style={{ marginTop: "10px", marginLeft: "30px" }}>
                      <Typography variant="h6" component="h6" align="left">
                        How to Remove Array Duplicates in ES6
                      </Typography>
                      <Typography
                        variant="subtitle"
                        color="textSecondary"
                        align="left"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}