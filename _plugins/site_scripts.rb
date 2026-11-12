# frozen_string_literal: true

require "digest"

# Loads this site's own navbar script (assets/js/day-night-toggle.js) on every page that has the
# theme toggle. The theme's includes are gem-owned and offer no hook for extra scripts, so the tag
# is added to the rendered HTML here instead of overriding _includes/scripts.liquid.
module SiteScripts
  SCRIPT = "assets/js/day-night-toggle.js"

  module_function

  def tag(site)
    @tag ||= begin
      version = Digest::MD5.hexdigest(File.read(File.join(site.source, SCRIPT)))
      %(<script defer src="#{site.baseurl}/#{SCRIPT}?v=#{version}"></script>)
    end
  end

  def reset
    @tag = nil
  end

  def inject(item)
    output = item.output
    return unless item.output_ext == ".html" && output&.include?('id="light-toggle"')

    position = output.rindex("</body>")
    return unless position

    item.output = output.dup.insert(position, "#{tag(item.site)}\n")
  end
end

Jekyll::Hooks.register(:site, :after_reset) { SiteScripts.reset }
Jekyll::Hooks.register(%i[pages documents], :post_render) { |item| SiteScripts.inject(item) }
