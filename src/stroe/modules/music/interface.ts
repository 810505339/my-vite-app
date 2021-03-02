export default interface MusicStateType {
    currentSong: songType.Song; //当前播放的歌曲
    currentTime: number //当前播放的时间
    playlist: songType.Song[],
    isPlayerShow: boolean,
    isMenuShow: boolean,
    playing: boolean,
    playMode: 'sequence' | 'random' | 'cycle',
    playHistory: []
}