

class MessageProcessor{
    
    _messageService = undefined;

    constructor(messageService){
        this._messageService = messageService
    }

    process(msg){
        return this._messageService.send(msg)
    }
}

module.exports = MessageProcessor;