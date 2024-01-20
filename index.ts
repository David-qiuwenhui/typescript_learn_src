type Status<T> = "success" | "failure" | "pending" | T;

type CompleteStatus = Status<"offline">;
