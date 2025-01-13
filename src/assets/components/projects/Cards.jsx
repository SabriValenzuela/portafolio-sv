import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import hl7 from "/img/hl7.png";

export const ProjectsCards = ({ title, info, image, github, demo }) => {
  console.log(image);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
        <Button size="small">Ver Demo</Button>
      </CardActions>
    </Card>
  );
};
