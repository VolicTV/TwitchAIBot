const AIProcessor = require('../src/ai/aiProcessor');
const OpenAIService = require('../src/services/openAIService');

jest.mock('../src/services/openAIService');

describe('AIProcessor', () => {
  let aiProcessor;
  let mockOpenAIService;

  beforeEach(() => {
    mockOpenAIService = new OpenAIService();
    aiProcessor = new AIProcessor();
    aiProcessor.openAIService = mockOpenAIService;
  });

  test('processMessage should call generateResponse', async () => {
    const message = 'Hello, bot!';
    const userInfo = { username: 'testuser' };
    const expectedResponse = 'Hello, testuser!';

    mockOpenAIService.generateText.mockResolvedValue(expectedResponse);

    const response = await aiProcessor.processMessage(message, userInfo);

    expect(mockOpenAIService.generateText).toHaveBeenCalled();
    expect(response).toBe(expectedResponse);
  });
});
