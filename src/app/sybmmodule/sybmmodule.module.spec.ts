import { SybmmoduleModule } from './sybmmodule.module';

describe('SybmmoduleModule', () => {
  let sybmmoduleModule: SybmmoduleModule;

  beforeEach(() => {
    sybmmoduleModule = new SybmmoduleModule();
  });

  it('should create an instance', () => {
    expect(sybmmoduleModule).toBeTruthy();
  });
});
