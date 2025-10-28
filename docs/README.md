# GitHub Pages Setup Instructions

This directory is configured to work with GitHub Pages.

## How to Enable GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch you want to use (e.g., `main`)
4. Under "Folder", select `/docs`
5. Click "Save"

After a few moments, your site will be available at: `https://14790897.github.io/14790897/`

## Configuration

The `_config.yml` file contains the Jekyll configuration for GitHub Pages:
- Site title and description
- Language settings (Chinese)
- Markdown processor (kramdown)
- Optional plugins for better compatibility

## Files

- `index.md` - The main page (resume/CV)
- `selfie.jpg` - Profile picture
- `_config.yml` - Jekyll configuration

## Theme

By default, GitHub Pages uses the `minima` theme. You can customize the theme by uncommenting one of the theme options in `_config.yml`:

```yaml
theme: minima
# or
theme: jekyll-theme-minimal
# or
theme: jekyll-theme-cayman
```

For more information about GitHub Pages and Jekyll, visit:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
