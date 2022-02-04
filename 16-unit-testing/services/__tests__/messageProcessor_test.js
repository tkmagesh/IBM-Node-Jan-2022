const MessageProcessor = require('../messageProcessor');

describe("Message Processor", () => {
    it("Should use the message service to process the message", () => {
        //Arrange
        const mockMessageService = {
            send(){

            }
        }
        jest.spyOn(mockMessageService, "send");
        const sut = new MessageProcessor(mockMessageService)

        //Act
        sut.process("Dummy message")

        //Assert
        expect(mockMessageService.send).toHaveBeenCalled()
    })
})