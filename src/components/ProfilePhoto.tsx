interface ProfilePhotoProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

const ProfilePhoto = ({ src, alt, size = "lg" }: ProfilePhotoProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-4 border-primary shadow-lg hover-scale hover-glow`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfilePhoto;
