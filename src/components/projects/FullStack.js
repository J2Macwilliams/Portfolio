import React, { useState } from 'react';

import { projectsData } from '../../data/projectsData'

import { Grid, Box, Typography, Card, CardHeader, CardMedia, CardActions, Link, IconButton} from "@material-ui/core"
import Notion from '../../assets/Notion.png'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link';
import { useStyles } from './projectStyles'

const FullStack = () => {
	const classes = useStyles()

	return (
		<Grid container spacing={ 4 }>
			{ projectsData.map((project, index) => (
				<Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 }>
					<Card className={ classes.card }>
						<CardHeader
							title={ project.name }
							subheader={project.type}
						/>
						<CardMedia className={ classes.media } image={ project.image } />
						<Box className={ classes.skills }>
							{ project.skills.map(skill => (
								<Typography
									className={ classes.skill }
								>
									{skill }
								</Typography>
							)) }
						</Box>
						<CardActions >
							<IconButton aria-label="SiteLink">
								<Link href={ project.links.site } target='_blank' className={ classes.links }><LinkIcon /></Link>
							</IconButton>
							<IconButton aria-label="Github">
								<Link href={ project.links.github } target='_blank' className={ classes.links }><GitHubIcon /></Link>
							</IconButton>
							{project.links.notion? <IconButton aria-label="Notion">
								<Link href={ project.links.notion } target='_blank' className={ classes.links }><CardMedia component='img' image={ Notion } className={ classes.notion } /></Link>
							</IconButton> : ""}

						</CardActions>

					</Card>
				</Grid>
			)) }
		</Grid>
	);
};

export default FullStack;
