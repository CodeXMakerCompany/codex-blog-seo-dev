import * as React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Utils
import parseDate from "../../../utils/parseDate";

//skeleton
import { CardSkeleton } from "../skeleton/Card";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const GlobalCard = ({ props }) => {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState(false);
  const themeState = useSelector((state) => state.settings.theme);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const goToPost = (id) => {
    router.push({
      pathname: `/posts/[id]`,
      query: { id: id },
    });
  };

  return (
    <div>
      { props?._id ? <a onClick={() => goToPost(props._id)}>
      {props.created_at ? (
        <Card
          className="card-animation"
          sx={{ maxWidth: 400 }}
          style={{
            backgroundColor: themeState === "dark" ? "#616161" : "",
            color: themeState === "dark" ? "beige" : "",
          }}
        >
          <CardHeader
            title={
              <Typography noWrap gutterBottom variant="h6" component="h4">
                {props.title}
              </Typography>
            }
            subheader={parseDate(props.created_at)}
            style={{ display: "block", overflow: "hidden", cursor: "pointer" }}
          />
          <CardMedia
            component="img"
            height="150"
            image={props.img}
            alt={props.source}
            style={{ cursor: "pointer" }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.source}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Rating
              name="simple-controlled"
              value={5}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Descripción:</Typography>
              <Typography paragraph>{props.description}</Typography>
            </CardContent>
          </Collapse>
          <style global jsx>{`
            .card-animation {
              transition: 0.5s;
              transform: scale(0.9);
            }
            .card-animation:hover::beffore {
              transform: scale(1.1);
              box-shadow: 0 0 15px #0288d1;
            }
            .card-animation:hover {
              box-shadow: 0 0 10px #0288d1;
              border-width: 1px;
              border-style: solid;
              border-color: #0288d1;
            }
          `}</style>
        </Card>
      ) : (
        <CardSkeleton />
      )}
    </a>: "loading..."}
    </div>
    
  );
};
