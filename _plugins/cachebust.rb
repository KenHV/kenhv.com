# _plugins/cachebust.rb
require 'digest/md5'

module Jekyll
  class CacheBust < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
      @input = input.strip
    end

    def render(context)
      site = context.registers[:site]
      destination = site.config['destination']
      file_path = File.join(destination, @input)
      
      if File.exist?(file_path)
        content = File.read(file_path)
        hash = Digest::MD5.hexdigest(content)
        "#{@input}?v=#{hash}"
      else
        Jekyll.logger.warn "CacheBust:", "File #{file_path} not found in destination folder"
        @input
      end
    end
  end
end

Liquid::Template.register_tag('cachebust', Jekyll::CacheBust)