interface ReadonlyArray<T> {
  includes(searchElement: unknown, fromIndex?: number): searchElement is T
}
