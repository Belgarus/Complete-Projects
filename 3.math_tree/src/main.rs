mod topic;
mod render;

use topic::Topic;
use render::{print_tree, print_topic_info};
use std::env;
use std::path::Path;

fn main() {
    // 1. Collect CLI arguments
    let args: Vec<String> = env::args().collect();

    // 2. Load the topic tree from "math_topics" folder
    let root_path = Path::new("math_topics");
    let root = Topic::load_tree(root_path);

    // 3. Simple CLI parsing
    if args.len() < 2 {
        println!("Usage: tree | info <topic-path>");
        return;
    }

    match args[1].as_str() {
        "tree" => {
            // Print the whole tree
            print_tree(&root, "");
        },
        "info" => {
            if args.len() < 3 {
                println!("Usage: info <topic-path>");
                return;
            }
            let path = &args[2];
            if let Some(topic) = root.find(path) {
                print_topic_info(topic);
            } else {
                println!("Topic not found: {}", path);
            }
        },
        _ => {
            println!("Unknown command: {}", args[1]);
            println!("Usage: tree | info <topic-path>");
        }
    }
}

