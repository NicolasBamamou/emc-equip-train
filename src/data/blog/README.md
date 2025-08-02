# Blog Articles Structure

This folder contains individual blog article files, organized similarly to the courses structure.

## Organization

Each blog article is stored in its own file with the following naming convention:
- `automation-future.ts` - Article about automation and human skills
- `safety-protocols.ts` - Essential safety protocols article
- `success-story.ts` - Graduate success story
- `training-guide.ts` - Training program selection guide
- `sustainability.ts` - Environmental sustainability article
- `women-in-industry.ts` - Women in heavy equipment industry
- `safety-culture.ts` - Comprehensive workplace safety culture article

## Structure

Each article file exports an object with the following properties:
- `id`: Unique identifier
- `title`: Article title in French
- `excerpt`: Brief description/summary
- `date`: Publication date
- `author`: Article author
- `readTime`: Estimated reading time
- `image`: Featured image path
- `category`: Article category
- `content`: Full HTML content with formatting

## Adding New Articles

1. Create a new `.ts` file in this directory
2. Export the article object following the existing structure
3. Add the import to `index.ts`
4. The article will automatically appear in the blog listing

## Benefits of This Structure

- **Modularity**: Each article is self-contained
- **Maintainability**: Easy to update individual articles
- **Scalability**: Simple to add new articles
- **Organization**: Clear separation of content
- **Version Control**: Better tracking of changes per article
