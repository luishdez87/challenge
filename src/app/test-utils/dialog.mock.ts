import { Observable, of } from 'rxjs';

export class DialogMock {
  open() {
    return {
      afterClosed: () => of(null)
    };
  }
}
