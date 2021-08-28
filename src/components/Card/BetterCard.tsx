import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Place } from "~root/stores/PlacesStore/PlacesStore";
import { Coordinates } from "~root/pages/Home/Home";

interface CardProperties {
  place: Place;
  currentLocation: null | Coordinates;
}

type FixedDistance = {
  value: number;
  unit: string;
};

/**
 * @param root0
 * @param root0.place
 * @param root0.currentLocation
 */
export default function BetterCard({ place, currentLocation }: CardProperties) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={place.imageURL} title={place.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {place.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {place.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
