use crate::topic::Topic;

/// Print the whole tree starting from a topic
/// indent: tracks spacing / ├─ symbols
pub fn print_tree(topic: &Topic, indent: &str) {
    // 1. Print the current topic with the given indent
    // 2. For each child, recursively call print_tree with increased indent
    // 3. Use '├──' and '└──' symbols to show hierarchy
    unimplemented!("Fill in recursive tree printing logic")
}

/// Print the content or info of a topic
pub fn print_topic_info(topic: &Topic) {
    // 1. Read the .md file from topic.path
    // 2. Print the first few lines (or whole content)
    // 3. Optionally, print children as a list
    unimplemented!("Fill in file reading and printing logic")
}
