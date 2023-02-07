export default interface DataViewListener<T> {
  onSuccess(data: T): void;
  showMessage(message: string): void;
}
