use std::path::{Path, PathBuf};

/// Represents a math topic (folder or file)
pub struct Topic {
    pub name: String,          // display name of the topic
    pub path: PathBuf,         // path relative to math_topics/
    pub children: Vec<Topic>,  // subtopics if any
    // Optional: you can lazy-load content later
}

impl Topic {
    /// Recursively loads all topics from a directory
    /// root_path: path to math_topics or a subdirectory
    pub fn load_tree(root_path: &Path) -> Topic {
        // 1. Read directory entries
        // 2. For each folder, call load_tree recursively
        // 3. For each `.md` file, create a Topic with no children
        // 4. Return Topic representing the root
        unimplemented!("Fill in recursive tree loading logic")
    }

    /// Finds a topic by path (like "calculus/limits")
    pub fn find(&self, path: &str) -> Option<&Topic> {
        // 1. Split path by '/'
        // 2. Navigate children recursively
        // 3. Return Some(&Topic) if found, None otherwise
        unimplemented!("Fill in path search logic")
    }

    /// Optionally, return whether this topic has no children
    pub fn is_empty(&self) -> bool {
        self.children.is_empty()
    }
}
