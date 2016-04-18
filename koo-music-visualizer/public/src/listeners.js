function playSong() {
    var self = event.target
    self.components.sound.play(); 
    self.setAttribute('geometry', 'width', '1');
    self.setAttribute('geometry', 'height', '1');
};

function pauseSong() {
    var self = event.target
    self.components.sound.pause();
    self.setAttribute('geometry', 'width', '.8');
    self.setAttribute('geometry', 'height', '.8');
};