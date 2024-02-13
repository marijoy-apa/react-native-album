import React, { Component } from "react";
import { ScrollView, Text } from 'react-native';
import axios from "axios";
import dummyData from "../data/dummy";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
    state = { albums: [] }; //initial or empty state //can only access thru class based components

    UNSAFE_componentWillMount() {
        console.log('component will mount ');
        // axios.get('https:rallycoding.herokuapp.com/api/music_albums').then(response => {
        //     console.log(response);
        //     this.setState({ albums: response.data })

        // });
        this.setState({ albums: dummyData })

    }

    renderAlbums() {
        return this.state.albums.map(al =>
            <AlbumDetail key={al.title} album={al} />
            // <Text key={al.title}>{al.title}</Text>
        )
        // return <Text>{this.state.albums[1].title}</Text>
    }

    render
    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}


export default AlbumList;